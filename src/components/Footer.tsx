export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-wider">建誠株式会社</span>
            <p className="mt-2 text-sm">神奈川県横浜市中区英町3-3</p>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Kensei Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
