import axios from "axios";

class ServerAPI {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:5000"
        });
        this.get = this.instance.get;
        this.post = this.instance.post;
        this.put = this.instance.put;
        this.delete = this.instance.delete;
    }
    getAllBooks() {
        return this.get('/api/v1/books/all');
    }

    getAllAuthors() {
        return this.get('/api/v1/authors/all');
    }

    getAllGenres() {
        return this.get('/api/v1/genres/all');
    }

    getAuthorById(id) {
        return this.get(`/api/v1/authors/${id}`)
    }

    getBookById(id) {
        return this.get(`/api/v1/books/${id}`)
    }

    deleteBookById(id) {
        return this.delete(`/api/v1/books/delete/${id}`)
    }

    createBook(book) {
        return this.post(`/api/v1/books/create`, book, { headers: { 'Content-Type': 'application/json' } })
    }

    createBanner(banner) {
        return this.post(`/api/v1/banners/create`, banner, { headers: { 'Content-Type': 'application/json' } })
    }

    getAllBanners() {
        return this.get(`/api/v1/banners/all`)
    }

    deleteBannerById(id) {
        return this.get(`/api/v1/banners/${id}`)
    }
    getBookByName(name) {
        return this.get(`/api/v1/books/search/${name}`)
    }

    getBookByGenreId(id) {
        return this.get(`/api/v1/books/genres/${id}`)
    }

    getBookByGenreName(name) {
        return this.get(`/api/v1/books/genres/search/${name}`)
    }

    getBookByAuthorName(name) {
        return this.get(`/api/v1/books/authors/search/${name}`)
    }

    getBookByBannerId(id) {
        return this.get(`/api/v1/books/banners/${id}`)
    }

    checkAdminAuth(login, password) {
        return this.post(`/api/v1/users/admin/auth`, {'login': login, 'password': password},
        { headers: { 'Content-Type': 'application/json' } })
    }

    updateBookById(id, book) {
        return this.put(`/api/v1/books/update/${id}`, book, { headers: { 'Content-Type': 'application/json' } })
    }

    updateBookColumnById(id, column, column_value)
        return this.put(`/api/v1/books/update/${id}/${column}`, {'column': column, 'column_value': column_value},
                { headers: { 'Content-Type': 'application/json' } } )

    createAuthor(author) {
        return this.post('/api/v1/authors/create', author, { headers: { 'Content-Type': 'application/json' } })
    }
}

const api = new ServerAPI();
export default api;
