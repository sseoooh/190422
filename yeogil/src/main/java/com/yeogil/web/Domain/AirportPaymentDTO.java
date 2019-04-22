package com.yeogil.web.Domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class AirportPaymentDTO {
	private String flightNumber,
					paymentDate,
					price,
					departureTime,
					seatNum,
					arrivalTime;
	private int paymentCode;
}
