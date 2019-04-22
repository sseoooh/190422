package com.yeogil.web.Domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class AirportSeatDTO {
	private String seatNum,
					arrivalTime,
					departureTime,
					departAirport,
					arrivingAirport,
					departDate,
					arrivalDate,
					seatType,
					airportName;
}
