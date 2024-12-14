import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface KeywordCount {
  keyword: string;
  count: number;
}

interface FilterPanelProps {
  categories: string[];
  keywords: KeywordCount[];
  selectedCategories: string[];
  selectedKeywords: string[];
  onCategoryChange: (category: string) => void;
  onKeywordChange: (keyword: string) => void;
  colorMap: Map<string, string>;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  keywords,
  selectedCategories,
  selectedKeywords,
  onCategoryChange,
  onKeywordChange,
  colorMap,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 8);
  const visibleKeywords = showAllKeywords ? keywords : keywords.slice(0, 8);

  return (
    <div className="absolute left-4 top-4 bg-gray-900 rounded-lg p-4 w-64 shadow-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-4 h-4" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Categories</h4>
          <div className="space-y-2">
            {visibleCategories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                  className="rounded border-gray-600"
                />
                <span className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(category) }}
                  />
                  <span className="text-sm capitalize">{category}</span>
                </span>
              </label>
            ))}
          </div>
          {categories.length > 8 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center space-x-1 text-sm text-gray-400 mt-2 hover:text-gray-300"
            >
              <span>{showAllCategories ? 'Show Less' : `Show ${categories.length - 8} More`}</span>
              {showAllCategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Keywords</h4>
          <div className="space-y-2">
            {visibleKeywords.map(({ keyword, count }) => (
              <label key={keyword} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedKeywords.includes(keyword)}
                    onChange={() => onKeywordChange(keyword)}
                    className="rounded border-gray-600"
                  />
                  <span className="text-sm">{keyword}</span>
                </div>
                <span className="text-xs text-gray-400">{count}</span>
              </label>
            ))}
          </div>
          {keywords.length > 8 && (
            <button
              onClick={() => setShowAllKeywords(!showAllKeywords)}
              className="flex items-center space-x-1 text-sm text-gray-400 mt-2 hover:text-gray-300"
            >
              <span>{showAllKeywords ? 'Show Less' : `Show ${keywords.length - 8} More`}</span>
              {showAllKeywords ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};