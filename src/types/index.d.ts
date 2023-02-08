declare namespace cat {
  type BottomNavigation = Array<{ id: number; label: string; href: string; icon: JSX.Element }>;
  type Count = {
    count: string;
  };
  type Data = {
    Boom: string;
  };
  type Facts = {
    data: readonly string[];
  };
  type FactImage = { id: string; url: string; width: number; height: number };
  type Headers = Readonly<Record<string, string | boolean>>;
  type Images = { id: string; url: string; width: number; height: number }[];
  type Navbar = { id: number; label: string; href: string }[];
  type Url = string;

  interface PageProps {
    title: string;
    className?: string;
    children: React.ReactNode;
  }

  interface SectionProps {
    className?: string;
    children: React.ReactNode;
  }

  interface Svg {
    className?: string;
  }
}