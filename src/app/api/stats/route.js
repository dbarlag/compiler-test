import { NextResponse } from 'next/server';

export async function GET() {
  // Mock API — returns updated Red Cross statistics
  const stats = [
    {
      text1: "3.5M+",
      text2: "I donasjoner",
      image1: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7d95d19-57f7-4006-a981-7cd9c7058b0f",
    },
    {
      text1: "52 000+",
      text2: "Frivillige",
      image1: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d6c7972-dc09-4cae-b623-666f5ef1090f",
    },
    {
      text1: "21",
      text2: "Distrikter",
      image1: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d56a65d-ef4c-48ee-ae07-4b1a571e5451",
    },
    {
      text1: "135",
      text2: "Lokalforeninger",
      image1: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40fb6298-0369-4905-ae43-85a003bea2d3",
    },
  ];

  return NextResponse.json({ stats });
}
