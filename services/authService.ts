import { User, Credentials } from '../types';

// This is the data structure for signing up.
export interface SignUpData extends Credentials {
    name: string;
}

const USERS_KEY = 'sg_ai_agency_users';
const CURRENT_USER_KEY = 'sg_ai_agency_current_user';

// Type for the stored user, which includes verification status.
type StoredUser = SignUpData & { verified: boolean };

// Helper to get users from localStorage
const getUsers = (): StoredUser[] => {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
};

// Helper to save users to localStorage
const saveUsers = (users: StoredUser[]) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

/**
 * Simulates signing up a new user.
 * Stores the user in localStorage with `verified: false`.
 */
export const signUp = async (userData: SignUpData): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Simulate network delay
            const users = getUsers();
            const existingUser = users.find(u => u.email === userData.email);
            
            if (existingUser) {
                return reject(new Error('An account with this email already exists.'));
            }
            
            users.push({ ...userData, verified: false });
            saveUsers(users);
            resolve();
        }, 500);
    });
};

/**
 * Simulates logging in a user.
 * Checks for user existence, verification status, and password.
 * Stores the logged-in user in localStorage.
 */
export const login = async (credentials: Credentials): Promise<User> => {
     return new Promise((resolve, reject) => {
        setTimeout(() => { // Simulate network delay
            const users = getUsers();
            const user = users.find(u => u.email === credentials.email);

            if (!user) {
                return reject(new Error('Invalid email or password.'));
            }
            if (!user.verified) {
                return reject(new Error('Account not verified. Please check your email.'));
            }
            if (user.password !== credentials.password) {
                return reject(new Error('Invalid email or password.'));
            }
            
            const loggedInUser: User = { name: user.name, email: user.email };
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
            resolve(loggedInUser);
        }, 500);
    });
};

/**
 * Simulates logging out a user by clearing their session.
 */
export const logout = (): void => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

/**
 * Retrieves the currently logged-in user from localStorage.
 */
export const getCurrentUser = (): User | null => {
    try {
        const userJson = localStorage.getItem(CURRENT_USER_KEY);
        return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
        console.error("Failed to parse current user from localStorage", error);
        return null;
    }
};

/**
 * Simulates verifying a user's email by updating their status in localStorage.
 */
export const verifyUser = (email: string): void => {
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === email);
    
    if (userIndex === -1) {
        throw new Error('User not found for verification.');
    }
    
    users[userIndex].verified = true;
    saveUsers(users);
};