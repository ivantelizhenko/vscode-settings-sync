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

export interface PreviewViewStructure extends VievCore {}

export interface VievCore {
  data: unknown;
  parentElement: HTMLElement;
  errorMessage?: string;
  message?: string;

  generateMarkup(): string | void;

  render(data: DataObjectType, render: boolean): string | void;
  update(data: DataType): void;
  clear(): void;
  renderSpinner(): void;
  renderMessage(message: string): void;
  renderError(message: string): void;
}
