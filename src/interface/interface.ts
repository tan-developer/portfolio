export interface Repo {
  id : number;
  name : string;
  full_name : string;
  description : string;
  html_url : string;
  languages : Lang[]
}

export interface Lang {
  name : string,
  percent : number
}