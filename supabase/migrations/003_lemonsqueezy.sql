-- Migration 003 — Ajout lemonsqueezy_order_id
-- La colonne lemonsqueezy_customer_id existe déjà depuis la migration 001

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS lemonsqueezy_order_id TEXT;
