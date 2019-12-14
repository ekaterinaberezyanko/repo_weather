package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Weather;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface WeatherRepository  extends CrudRepository<Weather, Long> {

//    @Autowired
//    private WeatherStore weatherStore;

//    public void addWeather(final List<Weather> newWeather) {
//        weatherStore.addWeather(newWeather);
//    }

    Weather findByDateDay(Long dateDay);

    @Query("Select u FROM Weather u")
    Weather customFind();

//    public List<Weather> findAllWeather() {
//        return weatherStore.getWeather();
//    }

}
