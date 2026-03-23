import { FC } from 'react';
import type { ResumeSchema } from '../types/resumeSchema';
import { SectionTitle } from './ui/SectionTitle';
import { SectionCard } from './ui/SectionCard';

type Reference = NonNullable<ResumeSchema['references']>[number];

interface ReferencesProps {
  references?: Reference[];
}

export const References: FC<ReferencesProps> = ({ references }) => {
  if (!references?.length) {
    return null;
  }

  return (
    <>
      <SectionTitle title="sections.references" />
      <div className="space-y-4">
        {references.map((reference, index) => (
          <SectionCard key={index} title={reference.name} summary={reference.reference} />
        ))}
      </div>
    </>
  );
};
