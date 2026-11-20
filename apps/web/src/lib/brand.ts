// Host → marka ayrımı.
//
// waycoffee.com.tr ailesi (cafeos.waycoffee.com.tr, cafe.waycoffee.com.tr, ...)
// müşteri tarafıdır: WayCoffee dijital menü + yönetici girişi. Diğer tüm
// host'lar (cafeos.zk.net.tr, cafe.zk.net.tr, localhost, IP) CafeOS tarafıdır.
//
// Alt dize kontrolü (includes('waycoffee')) yanlış host'ları da
// yakalayabildiği için kök-ek kontrolü kullanılır.

export const WAYCOFFEE_APEX = 'waycoffee.com.tr';

export function normalizeHost(host: string | null | undefined): string {
  return (host ?? '').trim().toLowerCase().split(':')[0];
}

export function isWaycoffeeHost(host: string | null | undefined): boolean {
  const h = normalizeHost(host);
  return h === WAYCOFFEE_APEX || h.endsWith(`.${WAYCOFFEE_APEX}`);
}

export const WAYCOFFEE_META = {
  title: 'WayCoffee — Dijital Menü ve Masa Siparişi',
  description:
    'Ayrancı ve Bahçelievler şubelerimizde masanızdaki QR ile menüyü görün, sıra beklemeden sipariş verin, hesabınızı isteyin.',
};

export const CAFEOS_META = {
  title: 'CafeOS Edge — Kafe Yönetim Platformu',
  description:
    'Offline-first kafe yönetim platformu: QR menü, masa hesap takibi, mutfak ekranı (KDS), günlük kapanış ve AI raporları.',
};
