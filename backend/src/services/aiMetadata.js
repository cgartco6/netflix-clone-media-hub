const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.generateDescription = async (title) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Write a 2-sentence movie synopsis.' },
        { role: 'user', content: `Title: ${title}` },
      ],
      max_tokens: 60,
    });
    return response.choices[0].message.content;
  } catch (e) {
    return 'No description available.';
  }
};

// Optional: DALL-E for cover art
exports.generatePoster = async (title) => {
  // ... call openai.images.generate
};
