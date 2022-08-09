package com.ciceniclabs.employee.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;
    private String firstName;
    private String lastName;
    private String emailId;

}
