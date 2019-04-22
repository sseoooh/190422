package com.yeogil.web.Domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class HotelRoomDTO {
	private String roomNum,
					startDate,
					endDate,
					roomType;
}
