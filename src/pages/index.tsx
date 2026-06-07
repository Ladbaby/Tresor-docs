import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function FeatureCard({icon, title, description}: {icon: string; title: string; description: string}) {
  return (
    <div style={{
      background: 'var(--ifm-color-primary-lighter)',
      borderRadius: '8px',
      padding: '16px 20px',
      flex: '1 1 200px',
    }}>
      <div style={{fontSize: '28px', marginBottom: '8px'}}>{icon}</div>
      <div style={{fontWeight: 700, fontSize: '15px', marginBottom: '6px'}}>{title}</div>
      <div style={{fontSize: '13px', opacity: 0.85}}>{description}</div>
    </div>
  );
}

function DocCard({icon, title, description, href}: {icon: string; title: string; description: string; href: string}) {
  return (
    <Link href={href} style={{
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--ifm-color-primary-lightest)',
      borderRadius: '10px',
      padding: '24px 28px',
      border: '2px solid var(--ifm-color-primary-light)',
      flex: '1 1 250px',
    }}>
      <div style={{fontSize: '36px', marginBottom: '12px'}}>{icon}</div>
      <div style={{fontWeight: 700, fontSize: '18px', marginBottom: '8px'}}>{title}</div>
      <div style={{fontSize: '14px', opacity: 0.85}}>{description}</div>
      <div style={{marginTop: '12px', fontWeight: 600, color: 'var(--ifm-color-primary-dark)'}}>
        Read more →
      </div>
    </Link>
  );
}

function HomePage() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline as string}>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 20px 40px',
      }}>
        {/* Hero */}
        <img src={useBaseUrl('/img/logo.png')} alt="Tresor Logo" style={{width: '80px', height: '80px', marginBottom: '20px'}} />
        <h1 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px'}}>
          {siteConfig.title}
        </h1>
        <p style={{fontSize: '1.2rem', opacity: 0.85, maxWidth: '640px', lineHeight: 1.6, marginBottom: '36px'}}>
          {siteConfig.tagline}
        </p>

        {/* CTA cards */}
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '56px', width: '100%', justifyContent: 'center'}}>
          <DocCard
            icon="📘"
            title="User Guide"
            description="Get started, configure your gateway, and manage providers through CLI or web UI."
            href="/Tresor-docs/docs/user/intro"
          />
          <DocCard
            icon="🔧"
            title="Developer Guide"
            description="Understand the architecture, build plugins, run tests, and contribute."
            href="/Tresor-docs/docs/dev/architecture"
          />
        </div>

        {/* Features */}
        <h2 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px'}}>Key Features</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', width: '100%', marginBottom: '40px'}}>
          <FeatureCard icon="🔄" title="Protocol Translation" description="Convert between OpenAI and Anthropic formats transparently." />
          <FeatureCard icon="⚡" title="Auto-Translation" description="Automatically inserts format converters based on downstream API type." />
          <FeatureCard icon="🛤️" title="Per-Path Routing" description="Route different API paths to different providers." />
          <FeatureCard icon="🏷️" title="Model Aliasing" description="Map one model name to another. Hot-switch backends without restarting." />
          <FeatureCard icon="🔌" title="Plugin Pipeline" description="Chain multiple transformers per rule." />
          <FeatureCard icon="🌐" title="Embedded Web UI" description="Manage everything from a browser dashboard — no separate frontend needed." />
        </div>

        {/* Architecture diagram */}
        <div style={{
          background: 'var(--ifm-color-primary-lightest)',
          borderRadius: '10px',
          padding: '24px 32px',
          width: '100%',
          maxWidth: '600px',
          marginBottom: '36px',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: 1.8,
          border: '1px solid var(--ifm-color-primary-light)',
        }}>
          <div>┌──────────────┐     ┌──────────────┐     ┌──────────────┐</div>
          <div>│   Your App   │─────▶│    Tresor     │─────▶│  LLM Provider │</div>
          <div>│              │     │    (gateway)  │     │  (OpenAI,      │</div>
          <div>│              │◀─────│              │◀─────│  Anthropic...) │</div>
          <div>└──────────────┘     └──────────────┘     └──────────────┘</div>
        </div>

        {/* GitHub link */}
        <Link
          href="https://github.com/ladbaby/tresor"
          style={{fontSize: '15px', opacity: 0.8}}
        >
          View source on GitHub →
        </Link>
      </section>
    </Layout>
  );
}

export default function Home() {
  return <HomePage />;
}
