import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, ShieldAlert } from 'lucide-react';
import { LANDING_BLOGS } from '../data/landingBlogs';

export const LandingBlogsSection: React.FC = () => {
  const [featured, ...rest] = LANDING_BLOGS;

  return (
    <section
      id="solo-risk-blogs"
      itemScope
      itemType="https://schema.org/Blog"
      className="py-20 lg:py-28 relative overflow-hidden border-b border-white/10 bg-[#05070D]"
    >
      <meta itemProp="name" content="LINKUP Solo Founder Risk Reports" />
      <meta
        itemProp="description"
        content="Five founder essays explaining why building a startup alone is dangerous and why paired cofounders win."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FBE618]/40 bg-[#FBE618]/10 text-[#FBE618] text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Five Founder Risk Reports Published On LINKUP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Read Why Building Alone{' '}
              <span className="text-[#FBE618]">Is Dangerous</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Before you spend another six months carrying engineering, sales, product, and fundraising on one pair of shoulders, read all five founder reports on the hidden traps that sink solo startups.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-[#FBE618]/50 text-white font-bold text-sm transition-all self-start lg:self-auto"
          >
            <BookOpen className="w-4 h-4 text-[#FBE618]" />
            <span>Open All 5 Reports</span>
            <ArrowRight className="w-4 h-4 text-[#FBE618]" />
          </Link>
        </div>

        {/* Featured Report 01 */}
        {featured && (
          <article
            itemProp="blogPost"
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="rounded-3xl border border-red-500/30 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden hover:border-[#FBE618]/50 transition-all group"
          >
            <link itemProp="mainEntityOfPage" href={`https://www.linkupbuild.com${featured.path}`} />
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Link
                to={featured.path}
                className="lg:col-span-6 block overflow-hidden bg-[#070A14]"
              >
                <figure
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="m-0 h-full"
                >
                  <img
                    src={featured.coverImage}
                    alt={featured.imageAlt}
                    width={1200}
                    height={675}
                    loading="eager"
                    itemProp="contentUrl url"
                    className="w-full h-full object-cover aspect-[16/9] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <meta itemProp="width" content="1200" />
                  <meta itemProp="height" content="675" />
                  <figcaption itemProp="caption" className="sr-only">
                    {featured.imageCaption}
                  </figcaption>
                </figure>
              </Link>

              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-red-500/15 border border-red-500/30 text-red-300 font-bold uppercase">
                      {featured.reportNumber}
                    </span>
                    <span className="text-[#FBE618] font-bold uppercase">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.readTime}</span>
                    </span>
                  </div>

                  <h3
                    itemProp="headline"
                    className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug group-hover:text-[#FBE618] transition-colors"
                  >
                    <Link to={featured.path}>{featured.title}</Link>
                  </h3>

                  <p
                    itemProp="description"
                    className="text-sm sm:text-base text-slate-300 leading-relaxed"
                  >
                    {featured.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400">
                    By <span itemProp="author" className="text-white font-semibold">{featured.author}</span> • {featured.publishedLabel}
                  </div>
                  <Link
                    to={featured.path}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#FBE618] hover:text-white transition-colors"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Remaining 4 Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <article
              key={post.slug}
              itemProp="blogPost"
              itemScope
              itemType="https://schema.org/BlogPosting"
              className="rounded-3xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.04] hover:border-[#FBE618]/45 transition-all overflow-hidden flex flex-col group"
            >
              <link itemProp="mainEntityOfPage" href={`https://www.linkupbuild.com${post.path}`} />
              <Link to={post.path} className="block overflow-hidden bg-[#070A14]">
                <figure
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="m-0"
                >
                  <img
                    src={post.coverImage}
                    alt={post.imageAlt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    itemProp="contentUrl url"
                    className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <meta itemProp="width" content="1200" />
                  <meta itemProp="height" content="675" />
                  <figcaption itemProp="caption" className="sr-only">
                    {post.imageCaption}
                  </figcaption>
                </figure>
              </Link>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold uppercase">
                      {post.reportNumber}
                    </span>
                    <span className="text-[#FBE618] font-bold uppercase">
                      {post.category}
                    </span>
                    <span className="text-slate-400">• {post.readTime}</span>
                  </div>

                  <h3
                    itemProp="headline"
                    className="text-xl sm:text-2xl font-display font-bold text-white leading-snug group-hover:text-[#FBE618] transition-colors"
                  >
                    <Link to={post.path}>{post.title}</Link>
                  </h3>

                  <p
                    itemProp="description"
                    className="text-sm text-slate-300 leading-relaxed"
                  >
                    {post.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    <span itemProp="author" className="text-slate-200 font-semibold">{post.author}</span> • {post.publishedLabel}
                  </span>
                  <Link
                    to={post.path}
                    className="inline-flex items-center gap-1.5 font-extrabold text-[#FBE618] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Essay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
