package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private String serviceName;
    private BookRepository bookRepository;

    public BookService(String serviceName) {
        this.serviceName = serviceName;
        System.out.println("Constructor Injection: Service Name set to '" + serviceName + "'");
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter Injection: BookRepository injected");
    }

    public void addBook(String title) {
        System.out.println(serviceName + ": Adding book - " + title);
        bookRepository.saveBook(title);
    }
}
