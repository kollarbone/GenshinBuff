import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  button { 
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  button:hover { 
    color: ${({ theme }) => theme.text_2};
  }
  .header {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .logo_1 {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .logo_2 {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .button_back {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .button_back:hover {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .item {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .item.active {
    border-bottom: 2px solid ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .current_events {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .current_banners {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .current_talents {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .current_news {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .our_social_networks {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .main_content {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .banner_corusel {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .calendarIcon {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_1 {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_2 {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .headings { 
    border-bottom: 1px solid ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .image_talent_character {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .talents {
    border-top: 1px solid ${({ theme }) => theme.border};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .talents_all {
    color: ${({ theme }) => theme.border};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .new {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .news_name {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .news_description {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .Characters {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .Character {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .passive {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .constellation {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .Weapons {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .characters_header {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .input {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_element {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .characters {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_name {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .weapon_name {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_card_info {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .Character {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .skills_and_attack {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .bilds_character {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_prev_img {
    border: 1px solid ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .name_main_info {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .value_main_info {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_titul {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_image_info {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .weapon_image_info {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .weapon_for_characters {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_about {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .weapon_about {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .combat_info {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_combat_info {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .attack {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .attack_name {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .attack_key {
    color: ${({ theme }) => theme.border};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .attack_value {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .constellation_character_dis {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .image_character_bild {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .character_bild_bonus {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .bild_name {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_3 {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_4 {
    color: ${({ theme }) => theme.text_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_5 {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .bild {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .artif_image svg{
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .TierList {
    background-color: ${({ theme }) => theme.body_2};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_6 {
    color: ${({ theme }) => theme.border};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .heading_7 {
    color: ${({ theme }) => theme.border};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .auto_complete {
    background-color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .search_character_name {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .auto_complete_item:hover {
    background-color: ${({ theme }) => theme.border};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  @media only screen and (max-width: 768px) {
    .item.active {
      color: ${({ theme }) => theme.text_2};
      transition: background 0.2s ease-in, color 0.2s ease-in;
    }
    .burger_bar {
      background-color: ${({ theme }) => theme.text};
      transition: background 0.2s ease-in, color 0.2s ease-in;
    }
    .burger__dark .menu {
      background-color: ${({ theme }) => theme.body};
      transition: background 0.2s ease-in, color 0.2s ease-in;
    }
  }
`;
export const lightTheme = {
  body: "#E5E5E5",
  text: "#2D2D2D",
  text_2: "#FF862F",
  body_2: "#FFFFFF",
  border: "rgba(0, 0, 0, 0.3)"
};
export const darkTheme = {
  body: "#232939",
  text: "#F0F0F0",
  text_2: "#6792ff",
  body_2: "#2d3548",
  border: "rgba(255, 255, 255, 0.3)"
};
