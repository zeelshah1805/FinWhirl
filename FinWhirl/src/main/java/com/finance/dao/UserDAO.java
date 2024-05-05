package com.finance.dao;

import com.finance.model.User;

public interface UserDAO {
    User getUserByUsername(String username);
    boolean addUser(User user);
}
