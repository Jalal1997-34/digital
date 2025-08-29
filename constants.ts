// FIX: Add constants for language and output type options used in the OptionsBar component.
import { Language, OutputType } from './types';

export const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
];

export const OUTPUT_TYPE_OPTIONS: { value: OutputType; label: string }[] = [
  { value: 'summary', label: 'Summary' },
  { value: 'bullets', label: 'Key Points' },
  { value: 'social', label: 'Social Post' },
];
