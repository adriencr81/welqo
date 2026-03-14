-- Bucket Supabase Storage pour les photos de propriétés
INSERT INTO storage.buckets (id, name, public)
VALUES ('property-covers', 'property-covers', true)
ON CONFLICT (id) DO NOTHING;

-- Politique : tout le monde peut lire (images publiques)
CREATE POLICY "Public read property covers"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'property-covers');

-- Politique : un user peut uploader dans son propre dossier (user_id/*)
CREATE POLICY "Users upload own property covers"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'property-covers'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Politique : un user peut supprimer ses propres images
CREATE POLICY "Users delete own property covers"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'property-covers'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );
