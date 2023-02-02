import Link from 'next/link';
import NavBar from './NavBar';

function Header(): JSX.Element {
  return (
    <div>
      <header className="sticky h-16 top-0 flex items-center justify-between px-8 py-02 rounded-b-2xl border-b bg-[#F3EFE0] dark:bg-[#18181b] dark:border-[#393941]">
        <div className="hidden sm:block">
          <div className="h-16">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 317.000000 316.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,316.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M1256 2507 c-22 -33 -44 -98 -51 -154 -4 -26 -15 -74 -26 -106 -13 -38 -19 -85 -19 -142 0 -76 -4 -95 -40 -184 -37 -91 -40 -107 -40 -193 0 -104 24 -215 66 -308 31 -68 94 -373 94 -457 0 -70 -6 -93 -26 -93 -18 0 -54 -36 -54 -54 0 -29 30 -46 81 -46 36 0 54 -5 69 -20 16 -16 32 -20 86 -18 36 1 71 7 78 13 6 7 41 15 76 19 36 3 130 16 210 27 123 18 153 26 195 52 59 36 91 38 131 9 16 -12 81 -37 145 -56 64 -20 153 -51 197 -71 107 -47 132 -51 177 -29 55 26 77 67 71 130 -8 92 -91 219 -137 212 -45 -6 -46 -32 -6 -106 66 -124 51 -132 -121 -64 -70 27 -157 60 -194 72 -70 22 -114 59 -122 103 -3 12 -7 65 -10 117 -4 77 -13 116 -46 209 -66 184 -95 236 -185 326 -63 63 -97 89 -160 118 -126 60 -129 63 -139 102 -8 29 -6 45 13 88 13 29 30 74 37 101 8 27 20 56 28 65 22 26 75 144 78 176 3 27 1 30 -26 28 -15 -1 -59 -20 -96 -42 l-67 -40 -64 21 c-35 11 -69 21 -74 23 -6 1 -21 36 -34 76 -37 118 -64 145 -95 96z m-19 -498 c48 -57 123 -73 204 -43 24 9 55 19 69 24 l25 7 0 -86 c0 -80 -2 -89 -30 -127 -16 -22 -54 -61 -84 -85 -76 -62 -94 -89 -99 -153 -4 -50 0 -65 47 -165 45 -95 52 -116 49 -161 l-3 -51 -108 101 c-159 151 -195 228 -204 435 l-5 120 38 75 c25 50 39 94 42 130 5 54 5 54 21 30 9 -13 26 -36 38 -51z m524 -791 c21 -11 57 -18 93 -18 l60 0 -55 -27 c-63 -33 -85 -69 -97 -159 -7 -56 -9 -60 -48 -81 l-41 -23 -49 62 c-27 33 -53 66 -58 73 -5 7 5 55 28 125 25 79 36 132 36 174 l0 60 48 -84 c36 -63 57 -90 83 -102z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>

        <div className="mr-auto font-semibold text-xl">
          <Link href="/">Cats Realm</Link>
        </div>

        <NavBar />

        <div className="sm:hidden justify-end">
          <div className="h-16 dark:hover:text-[#fff9d9]">
            <Link href="/" aria-label="Cat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 317.000000 316.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,316.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M1256 2507 c-22 -33 -44 -98 -51 -154 -4 -26 -15 -74 -26 -106 -13 -38 -19 -85 -19 -142 0 -76 -4 -95 -40 -184 -37 -91 -40 -107 -40 -193 0 -104 24 -215 66 -308 31 -68 94 -373 94 -457 0 -70 -6 -93 -26 -93 -18 0 -54 -36 -54 -54 0 -29 30 -46 81 -46 36 0 54 -5 69 -20 16 -16 32 -20 86 -18 36 1 71 7 78 13 6 7 41 15 76 19 36 3 130 16 210 27 123 18 153 26 195 52 59 36 91 38 131 9 16 -12 81 -37 145 -56 64 -20 153 -51 197 -71 107 -47 132 -51 177 -29 55 26 77 67 71 130 -8 92 -91 219 -137 212 -45 -6 -46 -32 -6 -106 66 -124 51 -132 -121 -64 -70 27 -157 60 -194 72 -70 22 -114 59 -122 103 -3 12 -7 65 -10 117 -4 77 -13 116 -46 209 -66 184 -95 236 -185 326 -63 63 -97 89 -160 118 -126 60 -129 63 -139 102 -8 29 -6 45 13 88 13 29 30 74 37 101 8 27 20 56 28 65 22 26 75 144 78 176 3 27 1 30 -26 28 -15 -1 -59 -20 -96 -42 l-67 -40 -64 21 c-35 11 -69 21 -74 23 -6 1 -21 36 -34 76 -37 118 -64 145 -95 96z m-19 -498 c48 -57 123 -73 204 -43 24 9 55 19 69 24 l25 7 0 -86 c0 -80 -2 -89 -30 -127 -16 -22 -54 -61 -84 -85 -76 -62 -94 -89 -99 -153 -4 -50 0 -65 47 -165 45 -95 52 -116 49 -161 l-3 -51 -108 101 c-159 151 -195 228 -204 435 l-5 120 38 75 c25 50 39 94 42 130 5 54 5 54 21 30 9 -13 26 -36 38 -51z m524 -791 c21 -11 57 -18 93 -18 l60 0 -55 -27 c-63 -33 -85 -69 -97 -159 -7 -56 -9 -60 -48 -81 l-41 -23 -49 62 c-27 33 -53 66 -58 73 -5 7 5 55 28 125 25 79 36 132 36 174 l0 60 48 -84 c36 -63 57 -90 83 -102z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;