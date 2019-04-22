package com.yeogil.web.Domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class HotelDTO {
	private String hotelName,
					hotelTel,
					hotelAddr;
}
