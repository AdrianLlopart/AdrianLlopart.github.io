import { useState, useMemo } from 'react';

interface ItemWithTags {
  tags: string[];
  title?: string;
  description?: string;
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  date?: string;
  startDate?: string;
  [key: string]: any;
}

export function useFilteredData<T extends ItemWithTags>(data: T[]) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    data.forEach(item => item.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;
      
      const searchContent = [
        item.title,
        item.description,
        item.company,
        item.role,
        item.institution,
        item.degree,
        item.longDescription
      ].filter(Boolean).join(' ').toLowerCase();

      const matchesSearch = searchContent.includes(searchQuery.toLowerCase());
      
      return matchesTag && matchesSearch;
    });
    // Sorting can be handled by the consumer if needed, or we can add a sort function here
  }, [data, selectedTag, searchQuery]);

  return {
    selectedTag,
    setSelectedTag,
    searchQuery,
    setSearchQuery,
    allTags,
    filteredData
  };
}
