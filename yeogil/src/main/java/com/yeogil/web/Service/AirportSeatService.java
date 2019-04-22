package com.yeogil.web.Service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.Domain.AirportSeatDTO;

@Component
public interface AirportSeatService {
	public void createCustomer(AirportSeatDTO aseat);
	public List<AirportSeatDTO> findAllCustomers(HashMap<String, String> hash);
	public List<AirportSeatDTO> findSomeCustomers(HashMap<String, String> hash);
	public AirportSeatDTO findCustomer(AirportSeatDTO aseat);
	public int countCustomer();
	public void modifyCustomer(AirportSeatDTO aseat);
	public void removeCustomer(AirportSeatDTO aseat);
}
