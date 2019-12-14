package com.kpi.voting.domain;

import com.kpi.voting.dao.WeatherRepository;
import com.kpi.voting.dao.entity.Weather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeatherService {

    @Autowired
    private WeatherRepository weatherRepository;

    public void addWeather(final Weather newWeather) {
        weatherRepository.save(newWeather);
    }

    public Iterable<Weather> getAllWeather() {
        return weatherRepository.findAll();
    }

    public void voteYes(Long id) {
        Weather weather = weatherRepository.findById(id).get();
        weather.setAllVoted(weather.getAllVoted() + 1);
        weather.setYesVoted(weather.getYesVoted() + 1);
        weatherRepository.save(weather);
    }

    public void voteNo(Long id) {
        Weather weather = weatherRepository.findById(id).get();
        weather.setAllVoted(weather.getAllVoted() + 1);
        weatherRepository.save(weather);
    }

}
