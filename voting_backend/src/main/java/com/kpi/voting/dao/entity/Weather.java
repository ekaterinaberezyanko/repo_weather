package com.kpi.voting.dao.entity;

import javax.persistence.*;

@Entity
public class Weather {

    @Override
    public String toString() {
        return "Weather{" +
                ", dateDay='" + dateDay + '\'' +
                ", dateMonth='" + dateMonth + '\'' +
                ", dayTemp='" + dayTemp + '\'' +
                ", nightTemp='" + nightTemp + '\'' +
                ", propabPrecipitation='" + propabPrecipitation + '\'' +
                ", windSpeed='" + windSpeed + '\'' +
                ", cloudySky='" + cloudySky + '\'' +
                ", airHumidity='" + airHumidity + '\'' +
                ", allVoted='" + allVoted + '\'' +
                ", yesVoted='" + yesVoted + '\'' +
                ", cataclism='" + cataclism + '\'' +
                '}';
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Column
    private Long dateDay;

    public Long getDateDay() {
        return dateDay;
    }

    public void setDateDay(Long dateDay) {
        this.dateDay = dateDay;
    }

    public Long getDateMonth() {
        return dateMonth;
    }

    public void setDateMonth(Long dateMonth) {
        this.dateMonth = dateMonth;
    }

    @Column
    private Long dateMonth;
    @Column
    private Long dayTemp;
    @Column
    private Long nightTemp;
    @Column
    private Long propabPrecipitation;
    @Column
    private Long windSpeed;
    @Column
    private String cloudySky;
    @Column
    private Long airHumidity;

    public String getCataclism() {
        return cataclism;
    }

    public void setCataclism(String cataclism) {
        this.cataclism = cataclism;
    }

    @Column
    private Long allVoted;
    @Column
    private String cataclism;

    public Long getAllVoted() {
        return allVoted;
    }

    public void setAllVoted(Long allVoted) {
        this.allVoted = allVoted;
    }

    public Long getYesVoted() {
        return yesVoted;
    }

    public void setYesVoted(Long yesVoted) {
        this.yesVoted = yesVoted;
    }

    @Column
    private Long yesVoted;

    public Weather() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDayTemp() {
        return dayTemp;
    }

    public void setDayTemp(Long dayTemp) {
        this.dayTemp = dayTemp;
    }

    public Long getNightTemp() {
        return nightTemp;
    }

    public void setNightTemp(Long nightTemp) {
        this.nightTemp = nightTemp;
    }

    public Long getPropabPrecipitation() {
        return propabPrecipitation;
    }

    public void setPropabPrecipitation(Long propabPrecipitation) {
        this.propabPrecipitation = propabPrecipitation;
    }

    public Long getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(Long windSpeed) {
        this.windSpeed = windSpeed;
    }

    public String getCloudySky() {
        return cloudySky;
    }

    public void setCloudySky(String cloudySky) {
        this.cloudySky = cloudySky;
    }

    public Long getAirHumidity() {
        return airHumidity;
    }

    public void setAirHumidity(Long airHumidity) {
        this.airHumidity = airHumidity;
    }
}
