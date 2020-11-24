/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 24/11/2020 14:26:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cate_id` int(11) NULL DEFAULT NULL,
  `cate_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `o` int(11) NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `updatetime` datetime(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '大萨达撒', 5, 'php', '### 大声', '1', 5, '2020-11-24 10:29:37', '2020-11-24 10:29:37');
INSERT INTO `article` VALUES (2, '测试文章', 6, 'tp', '的SaaS- ## 二级标题![superboxfull20.jpg](C:\\Users\\鲨鱼辣椒\\Desktop\\blog-api\\public/upload/26f53db6a4aa8699362c900684394aadsuperbox-full-20.jpg)', '1', 3, '2020-11-24 10:30:53', '2020-11-24 10:30:53');
INSERT INTO `article` VALUES (4, '撒大声地', 5, 'php', '阿萨德', '1', 22, '2020-11-24 10:37:13', '2020-11-24 10:37:13');
INSERT INTO `article` VALUES (5, '大萨达', 6, 'tp', '大#### 四级标题', '2', 1, '2020-11-24 10:39:15', '2020-11-24 10:39:15');
INSERT INTO `article` VALUES (11, '大声大das', 6, 'tp', '大声dsad1. - ### 三级标题', '2', 7, '2020-11-24 11:05:52', '2020-11-24 11:05:52');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `updatetime` datetime(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (5, 'php', '2020-11-23 15:04:35', '2020-11-23 15:04:35');
INSERT INTO `category` VALUES (6, 'tp', '2020-11-23 15:18:24', '2020-11-23 15:18:24');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT current_timestamp(0),
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (2, 'test', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (3, 'test1', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, 'test3', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (5, 'test33', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (6, '254', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (7, 'dmin', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (8, 'mino', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (9, 'mino3', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (10, 'mino33', '123456', NULL, NULL, NULL);
INSERT INTO `user` VALUES (11, '管理员', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, NULL);
INSERT INTO `user` VALUES (12, '测试用户', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, NULL);
INSERT INTO `user` VALUES (13, '大萨达撒', '99cc56bb24d7543e92fa39aa6f0d2d97', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
