package com.yeogil.web.Mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;


import com.yeogil.web.Domain.AirportSeatDTO;

@Repository
public interface AirportSeatMapper {
	public void insertCustomer(AirportSeatDTO aseat);
	public List<AirportSeatDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<AirportSeatDTO> selectSomeCustomers(HashMap<String, String> hash);
	public AirportSeatDTO selectCustomer(AirportSeatDTO aseat);
	public int countCustomer();
	public void updateCustomer(AirportSeatDTO aseat);
	public void deleteCustomer(AirportSeatDTO aseat);
}
