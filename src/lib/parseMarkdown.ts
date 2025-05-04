"use client"

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export default async function parseMarkdownToReact(markdownContent: string): Promise<string> {
    const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(markdownContent);
  
    return file.toString();
  }
