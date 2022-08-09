package com.ciceniclabs.employee.service;

import com.ciceniclabs.employee.entity.EmployeeEntity;
import com.ciceniclabs.employee.model.Employee;

import java.util.List;

public interface EmployeeService {


    Employee createEmployee(Employee employee);


    List<Employee> getAllEmployees();
}
