import { Session } from 'next-auth';

// Sauvegarder une session localement
export const saveSessionLocally = (session: Session) => {
  if (typeof window !== 'undefined') {
    try {
      console.log('Saving session locally:', session);
      localStorage.setItem('session', JSON.stringify(session));

      // Pas de logique de chiffrement, on garde juste la session
      const token = session.user.token; // Remplacer par 'token' ou une autre propriété si nécessaire
      if (token) {
        localStorage.setItem('sessionToken', token);
      } else {
        console.warn('No session token found.');
      }
    } catch (error) {
      console.error('Failed to save session locally:', error);
    }
  }
};

// Charger une session depuis le localStorage
export const loadSessionLocally = (): Session | null => {
  if (typeof window !== 'undefined') {
    try {
      const sessionData = localStorage.getItem('session');
      if (sessionData) {
        console.log('Loading session:', sessionData);
        const parsedSession = JSON.parse(sessionData);
        return parsedSession;  // Retourne la session sans tentative de déchiffrement
      } else {
        console.warn('No session found in localStorage.');
      }
    } catch (error) {
      console.error('Failed to load session locally:', error);
    }
  }
  return null;
};

// Fonction pour valider la structure d'une session
function isValidSession(data: unknown): data is Session {
  if (typeof data === 'object' && data !== null) {
    const session = data as Session;
    return (
      typeof session.user === 'object' &&
      session.user !== null &&
      typeof session.expires === 'string'
    );
  }
  return false;
}

// Mode test : exemple de session
if (process.env.NODE_ENV === 'test') {
  const mockSession: Session = {
    user: {
      id: '12345',            // Ajout de l'id
      login: 'testuser',
      right: "Admin" ,   // Ajout du login
      email: 'testuser@example.com',
      image: null,
      token: 'mock-token',    // Token comme avant
    },
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // Expiration dans 24h
  };

  saveSessionLocally(mockSession);

  const loadedSession = loadSessionLocally();
  console.log('Loaded session in test mode:', loadedSession);
}
