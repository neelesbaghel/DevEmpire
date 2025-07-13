export interface Data {
    /**
 * Represents a single resource or item in the collection.
 */
export interface ResourceItem {
  /** The URL to the resource 
  link: string;

  /** The main title or heading for the resource */
  head: string;

  /** Image URL representing the resource */
  image: string;

  /** Description or summary about the resource */
  about: string;

  /** Alternative text for the image */
  alt: string;

  /** Categorization labels for the resource */
  labels: string[];
}

/**
 * Represents a section or layout grouping of resource items.
 */
export interface ResourceSection {
  /** Subheading for this section */
  subheading: string;

  /** Unique identifier for the section */
  id: string;

  /** List of resource items in this section */
  dataSource: ResourceItem[];
}

/**
 * Represents a filter option for searching or categorizing resources.
 */
export interface FilterOption {
  /** Unique identifier for the filter */
  id: string;

  /** Display name for the filter */
  name: string;
}
    link: string,
    head: string,
    image: string,
    about: string,
    alt: string,
    label: string | string[]
}

export interface Layout {
    subheading: string,
    id: string,
    dataSource: Data[]
}

export interface Filter {
    id: string,
    name: string
}
