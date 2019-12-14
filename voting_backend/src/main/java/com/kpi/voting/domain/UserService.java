package com.kpi.voting.domain;

import com.kpi.voting.dao.User_repository;
import com.kpi.voting.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private User_repository userRepository;

    public void createUser (String userName) {
        User user = new User();
        user.setName(userName);
        userRepository.save(user);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
