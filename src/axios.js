import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nexon.co.kr",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNTAzMzk4ODA1IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0Nzk1OTAwMywiZXhwIjoxNjYzNTExMDAzLCJpYXQiOjE2NDc5NTkwMDN9.UwbnP9nZ09FduENrKOuJXAF8PIewmQzs7OFVqR7f0gY",
  },
});
