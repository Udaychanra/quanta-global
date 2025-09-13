BEGIN;

-- Minimal idempotent seeding for:
-- - Who we are → Enterprise Orchestration (EO)
-- - EO items (SAP and ERP Transformation, Finance Transformation)
-- - Their 4th-level subitems
-- - What we do → Offerings → SAP & Finance 4th-level subitems

-- 1) Ensure 'Who we are' simple categories
INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Our Story', 'our-story', '/our-story', 1
FROM navigation_sections ns
WHERE ns.slug='who-we-are'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='our-story'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Enterprise Orchestration (EO)', 'enterprise-orchestration', '/enterprise-orchestration', 2
FROM navigation_sections ns
WHERE ns.slug='who-we-are'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='enterprise-orchestration'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Leadership', 'leadership', '/leadership', 3
FROM navigation_sections ns
WHERE ns.slug='who-we-are'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='leadership'
);

-- 2) EO items (SAP and Finance)
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'SAP and ERP Transformation', 'sap-erp-transformation', '/offerings/sap', 1
FROM navigation_categories nc
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='sap-erp-transformation'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Finance Transformation', 'finance-transformation', '/offerings/finance', 2
FROM navigation_categories nc
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='finance-transformation'
);

-- 3) EO → SAP subitems
INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Brownfield Migration', 'brownfield', '/offerings/sap/brownfield', 'Move from ECC to S/4HANA with AI-guided cleanup.', 1
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='sap-erp-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='brownfield'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'S/4HANA Public Cloud', 'public-cloud', '/offerings/sap/public-cloud', 'Adopt clean core and scale securely in the cloud.', 2
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='sap-erp-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='public-cloud'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'ERP Modernization', 'modernization', '/offerings/sap/modernization', 'Retire debt, harmonize processes, simplify custom code.', 3
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='sap-erp-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='modernization'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Data Migration and Quality', 'data-migration', '/offerings/sap/data-migration', 'Fix, map, and move data with SARAH as the guardrail.', 4
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='sap-erp-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='data-migration'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Universal Parallel Accounting', 'upa', '/offerings/sap/upa', 'Modern finance in S/4HANA, ready for global reporting.', 5
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='sap-erp-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='upa'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Integration and Extensions', 'integration', '/offerings/sap/integration', 'Build the right services and side-by-side apps.', 6
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='sap-erp-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='integration'
);

-- 4) EO → Finance subitems
INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Central Finance', 'central-finance', '/offerings/finance/central-finance', 'Create a single source of truth for enterprise finance.', 1
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='finance-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='central-finance'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Close and Reporting Automation', 'close-automation', '/offerings/finance/close-automation', 'Automate reconciliations and disclosures to accelerate close.', 2
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='finance-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='close-automation'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Predictive Planning and FP&A', 'fpa', '/offerings/finance/fpa', 'Forecast and plan with ML-driven scenarios and agility.', 3
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='finance-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='fpa'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Controllership and Treasury', 'controllership-treasury', '/offerings/finance/controllership-treasury', 'Strengthen controls, compliance, cash, and liquidity operations.', 4
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='finance-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='controllership-treasury'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Finance Operate', 'operate', '/offerings/finance/operate', 'Operate finance with AI-assist, shared services, and automation.', 5
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='finance-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='operate'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'GBS for Finance', 'gbs', '/offerings/finance/gbs', 'Scale Global Business Services for high-value finance outcomes.', 6
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='who-we-are' AND nc.slug='enterprise-orchestration' AND ni.slug='finance-transformation'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='gbs'
);

-- 5) What we do → Offerings → SAP & Finance fourth-level
INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Brownfield Migration', 'brownfield', '/offerings/sap/brownfield', 'Move from ECC to S/4HANA with AI-guided cleanup.', 1
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='sap'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='brownfield'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'S/4HANA Public Cloud', 'public-cloud', '/offerings/sap/public-cloud', 'Adopt clean core and scale securely in the cloud.', 2
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='sap'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='public-cloud'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'ERP Modernization', 'modernization', '/offerings/sap/modernization', 'Retire debt, harmonize processes, simplify custom code.', 3
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='sap'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='modernization'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Data Migration and Quality', 'data-migration', '/offerings/sap/data-migration', 'Fix, map, and move data with SARAH as the guardrail.', 4
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='sap'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='data-migration'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Universal Parallel Accounting', 'upa', '/offerings/sap/upa', 'Modern finance in S/4HANA, ready for global reporting.', 5
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='sap'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='upa'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Integration and Extensions', 'integration', '/offerings/sap/integration', 'Build the right services and side-by-side apps.', 6
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='sap'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='integration'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Central Finance', 'central-finance', '/offerings/finance/central-finance', 'Create a single source of truth for enterprise finance.', 1
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='finance'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='central-finance'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Close and Reporting Automation', 'close-automation', '/offerings/finance/close-automation', 'Automate reconciliations and disclosures to accelerate close.', 2
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='finance'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='close-automation'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Predictive Planning and FP&A', 'fpa', '/offerings/finance/fpa', 'Forecast and plan with ML-driven scenarios and agility.', 3
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='finance'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='fpa'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Controllership and Treasury', 'controllership-treasury', '/offerings/finance/controllership-treasury', 'Strengthen controls, compliance, cash, and liquidity operations.', 4
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='finance'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='controllership-treasury'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'Finance Operate', 'operate', '/offerings/finance/operate', 'Operate finance with AI-assist, shared services, and automation.', 5
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='finance'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='operate'
);

INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT ni.id, 'GBS for Finance', 'gbs', '/offerings/finance/gbs', 'Scale Global Business Services for high-value finance outcomes.', 6
FROM navigation_items ni
JOIN navigation_categories nc ON nc.id = ni.category_id
JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='what-we-do' AND nc.slug='offerings' AND ni.slug='finance'
AND NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = ni.id AND nsi.slug='gbs'
);

COMMIT;

-- =====================================================
-- Blogs and Insights navigation seeding (idempotent)
-- =====================================================
BEGIN;

-- Blogs → Categories
INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Offerings', 'offerings', '/blogs/offerings', 1
FROM navigation_sections ns
WHERE ns.slug='blogs'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='offerings'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Enablers', 'enablers', '/blogs/enablers', 2
FROM navigation_sections ns
WHERE ns.slug='blogs'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='enablers'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Products', 'products', '/blogs/products', 3
FROM navigation_sections ns
WHERE ns.slug='blogs'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='products'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Industries', 'industries', '/blogs/industries', 4
FROM navigation_sections ns
WHERE ns.slug='blogs'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='industries'
);

-- Blogs → Offerings items
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'SAP', 'sap', '/blogs/offerings/sap', 1
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='offerings'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='sap'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Finance', 'finance', '/blogs/offerings/finance', 2
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='offerings'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='finance'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Supply Chain', 'supply-chain', '/blogs/offerings/scm', 3
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='offerings'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='supply-chain'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Cloud', 'cloud', '/blogs/offerings/cloud', 4
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='offerings'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='cloud'
);

-- Blogs → Enablers items
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Enterprise Navigation Office', 'eno', '/blogs/enablers/eno', 1
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='enablers'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='eno'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Program Planning and Execution', 'program', '/blogs/enablers/program', 2
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='enablers'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='program'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'Partner Ecosystem Strategy', 'partners', '/blogs/enablers/partners', 3
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='enablers'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='partners'
);

INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'AI and Data for the Intelligent Enterprise', 'ai-data', '/blogs/enablers/ai-data', 4
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='enablers'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='ai-data'
);

-- Blogs → Products items
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT nc.id, 'SARAH AI', 'sarah-ai', '/blogs/products/sarah-ai', 1
FROM navigation_categories nc JOIN navigation_sections ns ON ns.id = nc.section_id
WHERE ns.slug='blogs' AND nc.slug='products'
AND NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = nc.id AND ni.slug='sarah-ai'
);

-- Blogs → Industries items
WITH inds AS (
  SELECT ns.id AS section_id, nc.id AS category_id
  FROM navigation_sections ns
  JOIN navigation_categories nc ON nc.section_id = ns.id
  WHERE ns.slug='blogs' AND nc.slug='industries'
)
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT inds.category_id, v.label, v.slug, v.url, v.display_order
FROM inds
CROSS JOIN (
  VALUES
    ('Financial Services and Insurance','fsi','/blogs/industries/fsi',1),
    ('Technology, Media, and Telecom','tmt','/blogs/industries/tmt',2),
    ('Life Sciences and Healthcare','health','/blogs/industries/health',3),
    ('Manufacturing and Industrial','manufacturing','/blogs/industries/manufacturing',4),
    ('Consumer Goods and Retail','retail','/blogs/industries/retail',5),
    ('Energy and Utilities','energy','/blogs/industries/energy',6),
    ('Automotive and Transportation','auto','/blogs/industries/auto',7),
    ('Government and Public Services','public-sector','/blogs/industries/public-sector',8)
) AS v(label, slug, url, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = inds.category_id AND ni.slug = v.slug
);

-- Blogs → Offerings → SAP subitems
WITH sap_item AS (
  SELECT ni.id AS item_id
  FROM navigation_items ni
  JOIN navigation_categories nc ON nc.id = ni.category_id
  JOIN navigation_sections ns ON ns.id = nc.section_id
  WHERE ns.slug='blogs' AND nc.slug='offerings' AND ni.slug='sap'
), finance_item AS (
  SELECT ni.id AS item_id
  FROM navigation_items ni
  JOIN navigation_categories nc ON nc.id = ni.category_id
  JOIN navigation_sections ns ON ns.id = nc.section_id
  WHERE ns.slug='blogs' AND nc.slug='offerings' AND ni.slug='finance'
)
INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT si.item_id, v.label, v.slug, v.url, v.description, v.display_order
FROM sap_item si
CROSS JOIN (
  VALUES
    ('Brownfield Migration','brownfield','/blogs/offerings/sap/brownfield','Move from ECC to S/4HANA with AI-guided cleanup.',1),
    ('S/4HANA Public Cloud','public-cloud','/blogs/offerings/sap/public-cloud','Adopt clean core and scale securely in the cloud.',2),
    ('ERP Modernization','modernization','/blogs/offerings/sap/modernization','Retire debt, harmonize processes, simplify custom code.',3),
    ('Data Migration and Quality','data-migration','/blogs/offerings/sap/data-migration','Fix, map, and move data with SARAH as the guardrail.',4),
    ('Universal Parallel Accounting','upa','/blogs/offerings/sap/upa','Modern finance in S/4HANA, ready for global reporting.',5),
    ('Integration and Extensions','integration','/blogs/offerings/sap/integration','Build the right services and side-by-side apps.',6)
) AS v(label, slug, url, description, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = si.item_id AND nsi.slug = v.slug
);

-- Blogs → Offerings → Finance subitems
WITH finance_item AS (
  SELECT ni.id AS item_id
  FROM navigation_items ni
  JOIN navigation_categories nc ON nc.id = ni.category_id
  JOIN navigation_sections ns ON ns.id = nc.section_id
  WHERE ns.slug='blogs' AND nc.slug='offerings' AND ni.slug='finance'
)
INSERT INTO navigation_subitems (item_id, label, slug, url, description, display_order)
SELECT fi.item_id, v.label, v.slug, v.url, v.description, v.display_order
FROM finance_item fi
CROSS JOIN (
  VALUES
    ('Central Finance','central-finance','/blogs/offerings/finance/central-finance','Create a single source of truth for enterprise finance.',1),
    ('Close and Reporting Automation','close-automation','/blogs/offerings/finance/close-automation','Automate reconciliations and disclosures to accelerate close.',2),
    ('Predictive Planning and FP&A','fpa','/blogs/offerings/finance/fpa','Forecast and plan with ML-driven scenarios and agility.',3),
    ('Controllership and Treasury','controllership-treasury','/blogs/offerings/finance/controllership-treasury','Strengthen controls, compliance, cash, and liquidity operations.',4),
    ('Finance Operate','operate','/blogs/offerings/finance/operate','Operate finance with AI-assist, shared services, and automation.',5),
    ('GBS for Finance','gbs','/blogs/offerings/finance/gbs','Scale Global Business Services for high-value finance outcomes.',6)
) AS v(label, slug, url, description, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM navigation_subitems nsi WHERE nsi.item_id = fi.item_id AND nsi.slug = v.slug
);

-- Insights → Categories
INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Trending Topics', 'trending', '/insights/trending', 1
FROM navigation_sections ns
WHERE ns.slug='insights'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='trending'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Explore', 'explore', '/insights/explore', 2
FROM navigation_sections ns
WHERE ns.slug='insights'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='explore'
);

INSERT INTO navigation_categories (section_id, label, slug, url, display_order)
SELECT ns.id, 'Featured', 'featured', '/insights/featured', 3
FROM navigation_sections ns
WHERE ns.slug='insights'
AND NOT EXISTS (
  SELECT 1 FROM navigation_categories nc WHERE nc.section_id = ns.id AND nc.slug='featured'
);

-- Insights → Trending items
WITH cat AS (
  SELECT nc.id FROM navigation_categories nc
  JOIN navigation_sections ns ON ns.id = nc.section_id
  WHERE ns.slug='insights' AND nc.slug='trending'
)
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT cat.id, v.label, v.slug, v.url, v.display_order
FROM cat
CROSS JOIN (
  VALUES
    ('Artificial Intelligence & Gen AI','ai-genai','/insights/trending/ai-genai',1),
    ('Business Resilience','business-resilience','/insights/trending/business-resilience',2),
    ('Case Studies','case-studies','/insights/trending/case-studies',3),
    ('CEO Excellence','ceo-excellence','/insights/trending/ceo-excellence',4),
    ('Geopolitics','geopolitics','/insights/trending/geopolitics',5),
    ('Tariffs and Global Trade','tariffs-trade','/insights/trending/tariffs-trade',6)
) AS v(label, slug, url, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = cat.id AND ni.slug = v.slug
);

-- Insights → Explore items
WITH cat AS (
  SELECT nc.id FROM navigation_categories nc
  JOIN navigation_sections ns ON ns.id = nc.section_id
  WHERE ns.slug='insights' AND nc.slug='explore'
)
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT cat.id, v.label, v.slug, v.url, v.display_order
FROM cat
CROSS JOIN (
  VALUES
    ('Author Talks','author-talks','/insights/explore/author-talks',1),
    ('Global Surveys','global-surveys','/insights/explore/global-surveys',2),
    ('Quanta Explainers','explainers','/insights/explore/explainers',3),
    ('Quanta Live','live','/insights/explore/live',4),
    ('Quanta on Books','books','/insights/explore/books',5),
    ('Quanta on Lives & Legacies','lives-legacies','/insights/explore/lives-legacies',6),
    ('Quanta Podcast','podcast','/insights/explore/podcast',7),
    ('Quanta Themes','themes','/insights/explore/themes',8),
    ('Quanta Video','video','/insights/explore/video',9),
    ('Week in Charts','week-in-charts','/insights/explore/week-in-charts',10)
) AS v(label, slug, url, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = cat.id AND ni.slug = v.slug
);

-- Insights → Featured items
WITH cat AS (
  SELECT nc.id FROM navigation_categories nc
  JOIN navigation_sections ns ON ns.id = nc.section_id
  WHERE ns.slug='insights' AND nc.slug='featured'
)
INSERT INTO navigation_items (category_id, label, slug, url, display_order)
SELECT cat.id, v.label, v.slug, v.url, v.display_order
FROM cat
CROSS JOIN (
  VALUES
    ('Ask Quanta','ask-quanta','/insights/featured/ask-quanta',1),
    ('Quanta Quarterly','quarterly','/insights/featured/quarterly',2),
    ('Quanta Global Institute','global-institute','/insights/featured/global-institute',3)
) AS v(label, slug, url, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM navigation_items ni WHERE ni.category_id = cat.id AND ni.slug = v.slug
);

COMMIT;


