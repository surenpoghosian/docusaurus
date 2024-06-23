/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {TagsListItem, TagModule} from '@docusaurus/utils';
import type {
  AuthorsListItem,
  AuthorModule,
  BlogPageAuthor,
  BlogPageAuthors,
  BlogTag,
  BlogTags,
} from '@docusaurus/plugin-content-blog';

export function toTagsProp({blogTags}: {blogTags: BlogTags}): TagsListItem[] {
  return Object.values(blogTags)
    .filter((tag) => !tag.unlisted)
    .map((tag) => ({
      label: tag.label,
      permalink: tag.permalink,
      description: tag.description,
      count: tag.items.length,
    }));
}

export function toTagProp({
  blogTagsListPath,
  tag,
}: {
  blogTagsListPath: string;
  tag: BlogTag;
}): TagModule {
  return {
    label: tag.label,
    permalink: tag.permalink,
    description: tag.description,
    allTagsPath: blogTagsListPath,
    count: tag.items.length,
    unlisted: tag.unlisted,
  };
}

export function toPageAuthorsProp({
  blogPageAuthors,
}: {
  blogPageAuthors: BlogPageAuthors;
}): AuthorsListItem[] {
  return Object.values(blogPageAuthors)
    .filter((author) => !author.unlisted)
    .map((author) => ({
      ...author,
      count: author.items.length,
    }));
}

export function toPageAuthorProp({
  blogAuthorsListPath,
  author,
}: {
  blogAuthorsListPath: string;
  author: BlogPageAuthor;
}): AuthorModule {
  return {
    ...author,
    allAuthorsPath: blogAuthorsListPath,
    count: author.items.length,
  };
}
