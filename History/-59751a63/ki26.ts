export interface DataObjectType {
  id: string;
  image: string;
  title: string;
  publisher: string;
  key: string;

  page: number;
  results: any[];
  resultsPerPage: number;
  query: string;
}

export interface DataSearch {
  query: string;
  results: DataObjectType[];
  page: number;
  resultsPerPage: number;
}

export type DataType = DataObjectType | DataObjectType[];

export interface PreviewViewStructure {}

export interface VievCore {
  data: unknown;
  parentElement: HTMLElement;
  errorMessage: string;
  message: string;

  generateMarkup(): st;
}
