package com.kpi.voting.dao.memoryStore;

import com.kpi.voting.dao.entity.Weather;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Component
public class WeatherStore {
    private List<Weather> weathers = Collections.synchronizedList(new ArrayList<>());

    public void addWeather(final List<Weather> newWeather) {
        if (newWeather != null) {
            for (int i = 0; i < newWeather.size(); i++) {
                this.weathers.add(newWeather.get(i));
            }
        }

    }

    public List<Weather> getWeather() {
        return weathers;
    }
}
