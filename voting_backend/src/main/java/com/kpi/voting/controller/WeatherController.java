package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Weather;
import com.kpi.voting.domain.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/weather")
    public @ResponseBody
    Iterable<Weather> getWeather() {
        return weatherService.getAllWeather();
    }

    @PutMapping("/weather")
    public void sendMessage(@RequestBody Weather newWeather) {
        weatherService.addWeather(newWeather);
    }
    @PostMapping("/weather/yesvoted")
    public void voteYes(@RequestBody Long id) { weatherService.voteYes(id); }
    @PostMapping("/weather/novoted")
    public @ResponseBody
    void voteNo(@RequestBody Long id) { weatherService.voteNo(id); }
}
