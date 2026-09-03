import { DEFAULT_ITIL_PRICES } from '../data/itilPricingData';

const STORAGE_KEY = 'peer_itil_pricing_v1';

/**
 * Returns the full pricing map, with any admin overrides applied on top
 * of the hardcoded defaults.
 *
 * Shape: { [priceId]: { spPrice: number, olPrice: number } }
 */
export function getItilPricing() {
  const overrides = getStoredOverrides();
  // Merge: overrides win over defaults
  const merged = { ...DEFAULT_ITIL_PRICES };
  for (const [id, prices] of Object.entries(overrides)) {
    merged[id] = { ...merged[id], ...prices };
  }
  return merged;
}

/**
 * Persist a price override for a single course.
 * Only the fields provided are updated — pass {} to leave prices unchanged.
 */
export function saveItilCoursePrice(priceId, { spPrice, olPrice }) {
  const overrides = getStoredOverrides();
  overrides[priceId] = {
    ...(overrides[priceId] || {}),
    ...(spPrice !== undefined ? { spPrice: Number(spPrice) } : {}),
    ...(olPrice !== undefined ? { olPrice: Number(olPrice) } : {}),
  };
  persist(overrides);
}

/** Remove the custom override for a single course (reverts to default). */
export function resetItilCoursePrice(priceId) {
  const overrides = getStoredOverrides();
  delete overrides[priceId];
  persist(overrides);
}

/** Wipe ALL overrides — every course reverts to defaults. */
export function resetAllItilPricing() {
  localStorage.removeItem(STORAGE_KEY);
  // Dispatch storage event so other tabs / same-tab listeners update.
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
}

/** Returns true when at least one override exists. */
export function hasAnyOverride() {
  return Object.keys(getStoredOverrides()).length > 0;
}

/** Returns true when the given course has a custom price set. */
export function hasCourseOverride(priceId) {
  return priceId in getStoredOverrides();
}

// ── internals ─────────────────────────────────────────────────────────────────

function getStoredOverrides() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function persist(overrides) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  // Dispatch so the same tab's storage listeners fire (they normally only fire
  // in *other* tabs, so we dispatch manually here).
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
}
