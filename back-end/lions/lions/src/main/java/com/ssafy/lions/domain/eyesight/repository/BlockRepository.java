package com.ssafy.lions.domain.eyesight.repository;

import com.ssafy.lions.domain.navigation.entity.Block;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlockRepository extends JpaRepository<Block, String> {
    List<Block> findBlockTypeByBlockId(String blockId);

}
