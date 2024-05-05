package com.finance.service;

import com.finance.model.User;

public interface UserService {
    User authenticateUser(String username, String password);
    boolean registerUser(User user);
}
