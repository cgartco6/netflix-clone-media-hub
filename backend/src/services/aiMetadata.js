const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.generateDescription = async (title) => {
  if (!process.env.OPENAI_API_KEY) {
    return 'No description available (OpenAI key missing).';
  }
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Write a 2-sentence movie synopsis.' },
        { role: 'user', content: `Title: ${title}` },
      ],
      max_tokens: 60,
    });
    return response.choices[0].message.content || 'No description.';
  } catch (err) {
    console.error('AI description failed:', err.message);
    return 'Unable to generate description.';
  }
};

exports.generatePoster = async (title) => {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }
  try {
    const response = await openai.images.generate({
      model: 'dall-e-2',
      prompt: `Movie poster for "${title}"`,
      size: '256x256',
      n: 1,
    });
    return response.data[0].url || null;
  } catch (err) {
    console.error('AI poster failed:', err.message);
    return null;
  }
};
