package com.ssafy.lions.domain.navigation.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "gate")
public class Gate {
    @Id
    private Long gateId;

    @Column(name = "floor")
    private int floor;

    @Column(name = "label")
    private int label;

    @Column(name = "gate_num")
    private String gateNum;

    @Column(name = "x")
    private int x;
    @Column(name = "y")
    private int y;

}
