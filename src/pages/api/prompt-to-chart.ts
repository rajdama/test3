import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import NextCors from "nextjs-cors";

const fetchData = async ({ inputData }: { inputData: string }) => {
  const textToChartPrompt = `The following are the possible chart types supported: area, bar, line, composed, scatter, pie, radar, radialBar, treemap, and funnel. Analyze the user input: ${inputData} to accurately identify the chart type the user wants to display, based on context and keywords.
Generate a valid JSON array for Recharts API for the identified chart. This array should reflect realistic data examples that are likely in the context provided by the user input. The array should be structured as follows: [{"name": "Example Category", "value": 100}]. Ensure:
- The 'name' field is consistently named 'name'.
- The 'value' field should not be named 'value', but instead, use a term that represents the user metric appropriately and varies realistically across all items.
- All property names are enclosed in double quotes, adhering to strict JSON standards.
- The 'value' is always a numeric type, ensuring it reflects realistic figures, and 'name' is always a string type that accurately describes the data categories.
Return a JSON object that includes:
- "chartType" with the identified chart type as a string, ensuring it aligns with the user's intent.
- "chartData" containing the structured JSON array, ensuring data is realistic and representative of typical values for such a chart.
- "yAxisLabel" with a descriptive and precise label reflecting the metric visualized. Examples include 'Albums Sold (millions)', 'Monthly Listeners (millions)', or 'Annual Revenue (USD)'. This label should clearly state the unit and context of the data metric, ensuring it's immediately understandable."
- "chartDescriptionContent" with 500 words detailed and informative paragraphs based on the given input data. can summarise the data.
- "metaTitle" that is concise, includes primary keywords, and is limited to 60 characters to ensure visibility in search results.
- "metaDescription" that is engaging, provides a brief overview of the page content, includes secondary keywords, and is limited to 160 characters to optimize appearance in search results.
- "slug" that is a URL-friendly version of the metaTitle, ensuring it's concise and descriptive.`;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: textToChartPrompt }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.openAiKey}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  //   if (req.method !== "POST") {
  //     res.status(405).json({ error: "Method not allowed" });
  //     return;
  //   }

  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { inputData } = req.body;
  if (inputData === undefined || inputData === "") {
    res.status(200).json({ error: `Failed to process the input ${prompt}` });
    return;
  }

  try {
    const response = await fetchData({ inputData });
    res.status(200).json({ output: response });
  } catch (error) {
    console.error(`Parse graph error: ${error}`);
    res.status(200).json({ error: `Failed to process the input ${prompt}` });
  }
}
