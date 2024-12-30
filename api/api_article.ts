import axios from 'axios';

// URL de base de l'API
const API_BASE_URL = process.env.REACT_APP_API_URL + "/Article";

interface ArticleDTO {
    id: string;
    title: string;
    description: string;
    price: number;
    // Ajoutez d'autres champs en fonction de votre modèle d'article
}

class ArticleService {
    // Récupérer tous les articles
    async getAllArticles(): Promise<ArticleDTO[]> {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching articles', error);
            throw error;
        }
    }

    // Récupérer un article par ID
    async getArticleById(id: string): Promise<ArticleDTO> {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching article with ID: ${id}`, error);
            throw error;
        }
    }

    // Créer un nouvel article
    async createArticle(article: ArticleDTO): Promise<ArticleDTO> {
        try {
            const response = await axios.post(API_BASE_URL, article);
            return response.data;
        } catch (error) {
            console.error('Error creating article', error);
            throw error;
        }
    }

    // Mettre à jour un article
    async updateArticle(article: ArticleDTO): Promise<ArticleDTO> {
        try {
            const response = await axios.put(API_BASE_URL, article);
            return response.data;
        } catch (error) {
            console.error('Error updating article', error);
            throw error;
        }
    }

    // Supprimer un article par ID
    async deleteArticle(id: string): Promise<void> {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
        } catch (error) {
            console.error(`Error deleting article with ID: ${id}`, error);
            throw error;
        }
    }
}

// Utilisation du service dans votre application
const articleService = new ArticleService();

// Exemple de récupération de tous les articles
articleService.getAllArticles()
    .then((articles) => {
        console.log('Articles:', articles);
    })
    .catch((error) => {
        console.error('Erreur lors de la récupération des articles:', error);
    });

// Exemple de récupération d'un article par ID
articleService.getArticleById('123')
    .then((article) => {
        console.log('Article:', article);
    })
    .catch((error) => {
        console.error('Erreur lors de la récupération de l\'article:', error);
    });

// Exemple de création d'un article
const newArticle: ArticleDTO = {
    id: '0',  // L'ID sera généré par l'API
    title: 'New Article',
    description: 'Description du nouvel article',
    price: 25.99,
};

articleService.createArticle(newArticle)
    .then((createdArticle) => {
        console.log('Article créé:', createdArticle);
    })
    .catch((error) => {
        console.error('Erreur lors de la création de l\'article:', error);
    });

// Exemple de mise à jour d'un article
const updatedArticle: ArticleDTO = {
    id: '123',  // ID de l'article à mettre à jour
    title: 'Updated Article',
    description: 'Nouvelle description de l\'article',
    price: 29.99,
};

articleService.updateArticle(updatedArticle)
    .then((article) => {
        console.log('Article mis à jour:', article);
    })
    .catch((error) => {
        console.error('Erreur lors de la mise à jour de l\'article:', error);
    });

// Exemple de suppression d'un article
articleService.deleteArticle('123')
    .then(() => {
        console.log('Article supprimé avec succès');
    })
    .catch((error) => {
        console.error('Erreur lors de la suppression de l\'article:', error);
    });
