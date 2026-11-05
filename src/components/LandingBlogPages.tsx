import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';
import { LANDING_BLOGS, getLandingBlogBySlug } from '../data/landingBlogs';
import { NotFound } from './NotFound';

export const LandingBlogIndexPage: React.FC = () => {
  return (
    <div
      itemScope
      itemType="https://schema.org/Blog"
      className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-14"
    >
      <meta itemProp="name" content="Why Building Alone Is Dangerous | LINKUP Founder Journal" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-400 flex items-center gap-2">
        <Link to="/" className="hover:text-[#FBE618] transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#FBE618] font-bold">Founder Journal</span>
      </nav>

      {/* Hero Header */}
      <header className="space-y-5 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/40 bg-red-500/10 text-red-300 text-xs font-mono font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <span>Five Published Founder Risk Essays</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
          Why Building Alone <span className="text-[#FBE618]">Is Dangerous</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
          An editorial series from LINKUP examining the five structural failure modes of solo startups: psychological burnout, zero distribution, echo chamber blind spots, investor rejection, and lost execution velocity.
        </p>
      </header>

      {/* All 5 Essays */}
      <div className="space-y-8">
        {LANDING_BLOGS.map((post) => (
          <article
            key={post.slug}
            itemProp="blogPost"
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#FBE618]/50 transition-all overflow-hidden group"
          >
            <link itemProp="mainEntityOfPage" href={`https://www.linkupbuild.com${post.path}`} />
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Link to={post.path} className="lg:col-span-5 block overflow-hidden bg-[#070A14]">
                <figure
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="m-0 h-full"
                >
                  <img
                    src={post.coverImage}
                    alt={post.imageAlt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    itemProp="contentUrl url"
                    className="w-full h-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <meta itemProp="width" content="1200" />
                  <meta itemProp="height" content="675" />
                  <figcaption itemProp="caption" className="sr-only">
                    {post.imageCaption}
                  </figcaption>
                </figure>
              </Link>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-300 font-bold uppercase">
                      {post.reportNumber}
                    </span>
                    <span className="text-[#FBE618] font-bold uppercase">{post.category}</span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2
                    itemProp="headline"
                    className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug group-hover:text-[#FBE618] transition-colors"
                  >
                    <Link to={post.path}>{post.title}</Link>
                  </h2>

                  <p itemProp="description" className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {post.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-400">
                    By <span itemProp="author" className="text-white font-semibold">{post.author}</span> • {post.publishedLabel}
                  </span>
                  <Link
                    to={post.path}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#FBE618] hover:text-white transition-colors"
                  >
                    <span>Read Complete Essay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl border border-[#FBE618]/40 bg-gradient-to-br from-[#FBE618]/10 to-black p-8 sm:p-10 text-center space-y-5">
        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
          Do Not Carry An Entire Startup Alone
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
          Match with vetted technical, design, and growth cofounders on LINKUP through Linky AI and double opt in introductions.
        </p>
        <div>
          <a
            href="/app/landing"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FBE618] hover:bg-[#ffe938] text-black font-extrabold text-sm sm:text-base transition-transform hover:scale-[1.02]"
          >
            <span>Find My Cofounder On LINKUP</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const LandingBlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getLandingBlogBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  const related = LANDING_BLOGS.filter((b) => b.slug !== post.slug);

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        className="space-y-12"
      >
        <link itemProp="mainEntityOfPage" href={`https://www.linkupbuild.com${post.path}`} />
        <meta itemProp="inLanguage" content="en" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#FBE618] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#FBE618] transition-colors">
              Founder Journal
            </Link>
            <span>/</span>
            <span className="text-[#FBE618] font-bold">{post.category}</span>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#FBE618] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All 5 Reports</span>
          </Link>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/35 text-red-300 font-bold uppercase">
              {post.reportNumber}
            </span>
            <span
              itemProp="articleSection"
              className="px-3 py-1 rounded-full bg-[#FBE618]/10 border border-[#FBE618]/35 text-[#FBE618] font-bold uppercase"
            >
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1
            itemProp="headline"
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]"
          >
            {post.title}
          </h1>

          <p
            itemProp="description"
            className="text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-400">
            <div itemProp="author" itemScope itemType="https://schema.org/Person">
              By <span itemProp="name" className="text-white font-bold">{post.author}</span> •{' '}
              <span className="text-slate-300">{post.authorRole}</span>
            </div>
            <div>Published {post.publishedLabel}</div>
          </div>
        </header>

        {/* 16:9 HD Cover Image */}
        <figure
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
          className="m-0 rounded-3xl overflow-hidden border border-white/15 bg-[#070A14] shadow-2xl"
        >
          <img
            src={post.coverImage}
            alt={post.imageAlt}
            width={1200}
            height={675}
            fetchPriority="high"
            itemProp="contentUrl url"
            className="w-full aspect-[16/9] object-cover"
          />
          <meta itemProp="width" content="1200" />
          <meta itemProp="height" content="675" />
          <figcaption
            itemProp="caption"
            className="px-5 py-3.5 text-xs text-slate-400 border-t border-white/10 bg-black/40"
          >
            {post.imageCaption}
          </figcaption>
        </figure>

        {/* Executive Key Takeaways */}
        <aside className="rounded-3xl border border-[#FBE618]/35 bg-[#FBE618]/[0.05] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-[#FBE618]">
            <BookOpen className="w-4 h-4" />
            <span>Key Founder Takeaways</span>
          </div>
          <ul className="space-y-3">
            {post.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Table of Contents */}
        <nav
          aria-label="In this essay"
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 space-y-3"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Inside This Essay
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
            {post.sections.map((sec, i) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-slate-200 hover:text-[#FBE618] transition-colors font-medium"
                >
                  0{i + 1}. {sec.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Full Essay Body */}
        <div itemProp="articleBody" className="space-y-12">
          {post.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="space-y-5 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-slate-200 leading-[1.85] font-normal"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* FAQ Rich Results Block */}
        <section
          aria-label="Frequently asked questions"
          className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-9 space-y-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00C2FF]">
            <HelpCircle className="w-4 h-4" />
            <span>Founder Questions Answered</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Common Questions On Solo Startup Risk
          </h2>
          <div className="space-y-5">
            {post.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-2"
              >
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action CTA */}
        <div className="rounded-3xl border border-[#FBE618]/45 bg-gradient-to-br from-[#FBE618]/15 via-black to-black p-7 sm:p-10 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
            Stop Building Alone Before Burnout Wins
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
            Tell Linky what you are building and the missing cofounder role you need. Get matched with vetted technical, design, and growth cofounders on LINKUP.
          </p>
          <div className="pt-1">
            <a
              href="/app/landing"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FBE618] hover:bg-[#ffe938] text-black font-extrabold text-sm sm:text-base transition-transform hover:scale-[1.02]"
            >
              <span>Find My Cofounder Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Internal Link Mesh to Other 4 Essays */}
        <section aria-label="More founder reports" className="pt-6 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              Continue Reading The Solo Risk Series
            </h2>
            <Link to="/blog" className="text-xs font-mono font-bold text-[#FBE618] hover:text-white">
              View All 5
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#FBE618]/45 p-5 space-y-2 transition-all group"
              >
                <div className="text-[11px] font-mono font-bold text-[#FBE618] uppercase">
                  {item.reportNumber} • {item.category}
                </div>
                <h3 className="text-base font-display font-bold text-white group-hover:text-[#FBE618] transition-colors leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-400">{item.readTime}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
