// Simple in-memory participant storage for live workshop
// Data persists during the session (resets on function cold start)

let participants = [];

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    // GET: return all participants
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(participants)
      };
    }

    // POST: add or update participant
    if (event.httpMethod === 'POST') {
      const newParticipant = JSON.parse(event.body);

      if (!newParticipant.id || !newParticipant.name) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Missing id or name' })
        };
      }

      const existingIndex = participants.findIndex(p => p.id === newParticipant.id);

      if (existingIndex >= 0) {
        participants[existingIndex] = newParticipant;
      } else {
        participants.push(newParticipant);
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          total: participants.length,
          participant: newParticipant
        })
      };
    }

    // DELETE: clear all (for reset)
    if (event.httpMethod === 'DELETE') {
      participants = [];
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'All cleared' })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
